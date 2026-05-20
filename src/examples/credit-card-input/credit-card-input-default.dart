import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class CreditCardInputDefault extends StatefulWidget {
  const CreditCardInputDefault({super.key});

  @override
  State<CreditCardInputDefault> createState() => _CreditCardInputDefaultState();
}

class _CreditCardInputDefaultState extends State<CreditCardInputDefault> {
  final _number = TextEditingController();
  final _name = TextEditingController();
  final _expiry = TextEditingController();
  final _cvv = TextEditingController();
  final _cvvFocus = FocusNode();
  bool _showBack = false;
  bool _revealCvv = false;

  @override
  void initState() {
    super.initState();
    _cvvFocus.addListener(() => setState(() => _showBack = _cvvFocus.hasFocus));
    _number.addListener(() => setState(() {}));
    _name.addListener(() => setState(() {}));
    _expiry.addListener(() => setState(() {}));
    _cvv.addListener(() => setState(() {}));
  }

  @override
  void dispose() {
    _number.dispose();
    _name.dispose();
    _expiry.dispose();
    _cvv.dispose();
    _cvvFocus.dispose();
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

  List<String> _groups() {
    final sizes = _network() == 'amex' ? [4, 6, 5] : [4, 4, 4, 4];
    final d = _digits(_number.text);
    final out = <String>[];
    var cursor = 0;
    for (final g in sizes) {
      final slice = d.substring(cursor, (cursor + g).clamp(0, d.length));
      cursor += g;
      out.add(slice.padRight(g, '•'));
    }
    return out;
  }

  // Brand tokens (resolve from generated dart tokens in a real app).
  static const _primary = Color(0xFFED7855);
  static const _primaryHover = Color(0xFFD65C3A);
  static const _primaryActive = Color(0xFFB14525);
  static const _foreground = Color(0xFF2E2B2B);
  static const _border = Color(0xFFEBE9E8);
  static const _placeholder = Color(0xFFC7C6C6);
  static const _secondaryForeground = Color(0xFF6A6373);

  Widget _field({required String label, required Widget child}) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(label,
          style: const TextStyle(
            fontFamily: 'Lexend', fontSize: 12, fontWeight: FontWeight.w500,
            color: _secondaryForeground)),
        const SizedBox(height: 4),
        child,
      ],
    );
  }

  InputDecoration _decoration(String hint, {Widget? suffix}) => InputDecoration(
    hintText: hint,
    hintStyle: const TextStyle(color: _placeholder),
    contentPadding: const EdgeInsets.symmetric(horizontal: 12),
    suffixIcon: suffix,
    isDense: true,
    filled: true,
    fillColor: Colors.white,
    border: const OutlineInputBorder(
      borderRadius: BorderRadius.all(Radius.circular(8)),
      borderSide: BorderSide(color: _border),
    ),
    enabledBorder: const OutlineInputBorder(
      borderRadius: BorderRadius.all(Radius.circular(8)),
      borderSide: BorderSide(color: _border),
    ),
    focusedBorder: const OutlineInputBorder(
      borderRadius: BorderRadius.all(Radius.circular(8)),
      borderSide: BorderSide(color: _primary, width: 2),
    ),
  );

  @override
  Widget build(BuildContext context) {
    final groups = _groups();
    final network = _network();

    return SizedBox(
      width: 384,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          // Card preview
          AspectRatio(
            aspectRatio: 1.586,
            child: Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(16),
                gradient: const LinearGradient(
                  begin: Alignment.topLeft, end: Alignment.bottomRight,
                  colors: [_primary, _primaryHover, _primaryActive],
                ),
                boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.15), blurRadius: 30, offset: const Offset(0, 10))],
              ),
              child: _showBack
                  ? Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        const SizedBox(height: 8),
                        Container(margin: const EdgeInsets.symmetric(horizontal: -16), height: 40, color: const Color(0xCC2E2B2B)),
                        const SizedBox(height: 12),
                        Align(
                          alignment: Alignment.centerRight,
                          child: Container(
                            height: 36, width: 220, padding: const EdgeInsets.symmetric(horizontal: 12),
                            alignment: Alignment.centerRight,
                            decoration: BoxDecoration(color: Colors.white.withOpacity(0.95), borderRadius: BorderRadius.circular(6)),
                            child: Text(_cvv.text.isEmpty ? '•••' : _cvv.text,
                              style: const TextStyle(fontFamily: 'GeistMono', fontSize: 14, fontWeight: FontWeight.w600, color: _foreground)),
                          ),
                        ),
                        const Spacer(),
                        const Text('CVV / CVC', style: TextStyle(fontSize: 10, color: Colors.white70, letterSpacing: 2)),
                      ],
                    )
                  : Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Container(width: 36, height: 36, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(6))),
                            Text(network == 'unknown' ? '' : network.toUpperCase(),
                              style: const TextStyle(fontWeight: FontWeight.w800, fontStyle: FontStyle.italic, color: Colors.white, letterSpacing: 1)),
                          ],
                        ),
                        Wrap(
                          spacing: 12,
                          children: groups.map((g) => Text(g,
                            style: const TextStyle(fontFamily: 'GeistMono', fontSize: 16, fontWeight: FontWeight.w600, color: Colors.white, letterSpacing: 3))).toList(),
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          crossAxisAlignment: CrossAxisAlignment.end,
                          children: [
                            Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                const Text('CARD HOLDER', style: TextStyle(fontSize: 10, color: Colors.white70, letterSpacing: 2)),
                                Text(_name.text.isEmpty ? 'FULL NAME' : _name.text.toUpperCase(),
                                  style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w500, color: Colors.white)),
                              ],
                            ),
                            Column(
                              crossAxisAlignment: CrossAxisAlignment.end,
                              children: [
                                const Text('EXPIRES', style: TextStyle(fontSize: 10, color: Colors.white70, letterSpacing: 2)),
                                Text(_expiry.text.isEmpty ? 'MM/YY' : _expiry.text,
                                  style: const TextStyle(fontFamily: 'GeistMono', fontSize: 14, fontWeight: FontWeight.w500, color: Colors.white)),
                              ],
                            ),
                          ],
                        ),
                      ],
                    ),
            ),
          ),
          const SizedBox(height: 16),
          // Fields
          _field(label: 'Card number', child: TextField(
            controller: _number,
            keyboardType: TextInputType.number,
            inputFormatters: [FilteringTextInputFormatter.digitsOnly, LengthLimitingTextInputFormatter(16)],
            decoration: _decoration('0000 0000 0000 0000'),
            style: const TextStyle(fontFamily: 'GeistMono', fontSize: 14, color: _foreground),
          )),
          const SizedBox(height: 12),
          _field(label: 'Cardholder name', child: TextField(
            controller: _name,
            decoration: _decoration('Jane Appleseed'),
            style: const TextStyle(fontFamily: 'Lexend', fontSize: 14, color: _foreground),
          )),
          const SizedBox(height: 12),
          Row(children: [
            Expanded(child: _field(label: 'Expiry', child: TextField(
              controller: _expiry,
              keyboardType: TextInputType.number,
              inputFormatters: [FilteringTextInputFormatter.digitsOnly, LengthLimitingTextInputFormatter(4)],
              decoration: _decoration('MM/YY'),
              style: const TextStyle(fontFamily: 'GeistMono', fontSize: 14, color: _foreground),
            ))),
            const SizedBox(width: 12),
            Expanded(child: _field(label: 'CVV', child: TextField(
              controller: _cvv,
              focusNode: _cvvFocus,
              obscureText: !_revealCvv,
              keyboardType: TextInputType.number,
              inputFormatters: [FilteringTextInputFormatter.digitsOnly, LengthLimitingTextInputFormatter(network == 'amex' ? 4 : 3)],
              decoration: _decoration(network == 'amex' ? '••••' : '•••',
                suffix: IconButton(
                  icon: Icon(_revealCvv ? Icons.visibility_off : Icons.visibility, size: 16),
                  onPressed: () => setState(() => _revealCvv = !_revealCvv),
                  tooltip: _revealCvv ? 'Hide CVV' : 'Show CVV',
                )),
              style: const TextStyle(fontFamily: 'GeistMono', fontSize: 14, color: _foreground),
            ))),
          ]),
        ],
      ),
    );
  }
}
