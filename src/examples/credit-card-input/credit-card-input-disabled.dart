import 'package:flutter/material.dart';

/// Disabled variant — wraps the default fields in IgnorePointer + Opacity and
/// passes `enabled: false` to every TextField. See credit-card-input-default.dart
/// for the canonical preview + field markup.

class CreditCardInputDisabled extends StatelessWidget {
  const CreditCardInputDisabled({super.key});

  InputDecoration _decoration(String value) => InputDecoration(
    hintText: value,
    contentPadding: const EdgeInsets.symmetric(horizontal: 12),
    isDense: true,
    filled: true,
    fillColor: const Color(0xFFF5F3F3),
  );

  @override
  Widget build(BuildContext context) {
    return Opacity(
      opacity: 0.6,
      child: IgnorePointer(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            TextField(controller: TextEditingController(text: '5555 5555 5555 4444'), enabled: false, decoration: _decoration('Card number')),
            const SizedBox(height: 12),
            TextField(controller: TextEditingController(text: 'Jane Appleseed'),       enabled: false, decoration: _decoration('Cardholder name')),
            const SizedBox(height: 12),
            Row(children: [
              Expanded(child: TextField(controller: TextEditingController(text: '12/29'), enabled: false, decoration: _decoration('MM/YY'))),
              const SizedBox(width: 12),
              Expanded(child: TextField(controller: TextEditingController(text: '321'),   enabled: false, decoration: _decoration('CVV'), obscureText: true)),
            ]),
          ],
        ),
      ),
    );
  }
}
