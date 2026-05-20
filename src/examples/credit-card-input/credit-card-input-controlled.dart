import 'package:flutter/material.dart';

/// Controlled variant — see credit-card-input-default.dart for the full
/// preview + field markup. The pattern below shows surfacing derived state
/// (network, Luhn) from the same controllers.

class CreditCardInputControlled extends StatefulWidget {
  const CreditCardInputControlled({super.key});

  @override
  State<CreditCardInputControlled> createState() => _CreditCardInputControlledState();
}

class _CreditCardInputControlledState extends State<CreditCardInputControlled> {
  final _number = TextEditingController();

  @override
  void initState() {
    super.initState();
    _number.addListener(() => setState(() {}));
  }

  @override
  void dispose() {
    _number.dispose();
    super.dispose();
  }

  String _digits(String v) => v.replaceAll(RegExp(r'\D'), '');

  String _network() {
    final d = _digits(_number.text);
    if (RegExp(r'^4').hasMatch(d)) return 'visa';
    if (RegExp(r'^(5[1-5]|2[2-7])').hasMatch(d)) return 'mastercard';
    if (RegExp(r'^3[47]').hasMatch(d)) return 'amex';
    if (RegExp(r'^(6011|65|64[4-9])').hasMatch(d)) return 'discover';
    return 'unknown';
  }

  bool _luhn() {
    final d = _digits(_number.text);
    if (d.length < 12) return false;
    var sum = 0; var alt = false;
    for (var i = d.length - 1; i >= 0; i--) {
      var n = int.parse(d[i]);
      if (alt) { n *= 2; if (n > 9) n -= 9; }
      sum += n; alt = !alt;
    }
    return sum % 10 == 0;
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        // Mount CreditCardInputDefault here, reading its controllers via a parent.
        TextField(controller: _number, decoration: const InputDecoration(hintText: '0000 0000 0000 0000')),
        const SizedBox(height: 12),
        Text(
          'Detected network: ${_network()} · Luhn: ${_luhn() ? "valid" : "—"}',
          style: const TextStyle(fontFamily: 'GeistMono', fontSize: 12, color: Color(0xFF7A7272)),
        ),
      ],
    );
  }
}
