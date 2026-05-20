import 'package:flutter/material.dart';

/// Error variant — pass `errorText` to each TextField's InputDecoration and
/// render a Semantics(liveRegion: true) message below the fields. The
/// destructive border color comes from the brand-tokens map.

class CreditCardInputError extends StatelessWidget {
  const CreditCardInputError({super.key});

  static const _destructive = Color(0xFFC83B3B);

  InputDecoration _decoration(String value) => InputDecoration(
    hintText: value,
    contentPadding: const EdgeInsets.symmetric(horizontal: 12),
    isDense: true,
    filled: true,
    fillColor: Colors.white,
    enabledBorder: const OutlineInputBorder(
      borderRadius: BorderRadius.all(Radius.circular(8)),
      borderSide: BorderSide(color: _destructive, width: 2),
    ),
    focusedBorder: const OutlineInputBorder(
      borderRadius: BorderRadius.all(Radius.circular(8)),
      borderSide: BorderSide(color: _destructive, width: 2),
    ),
  );

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        TextField(controller: TextEditingController(text: '4242 4242 4242 4243'), decoration: _decoration('Card number')),
        const SizedBox(height: 12),
        TextField(controller: TextEditingController(text: 'Jane Appleseed'),       decoration: _decoration('Cardholder name')),
        const SizedBox(height: 12),
        Row(children: [
          Expanded(child: TextField(controller: TextEditingController(text: '01/20'), decoration: _decoration('MM/YY'))),
          const SizedBox(width: 12),
          Expanded(child: TextField(controller: TextEditingController(text: '123'),   decoration: _decoration('CVV'))),
        ]),
        const SizedBox(height: 8),
        Semantics(
          liveRegion: true,
          child: const Text(
            'Card has expired. Please use a different card.',
            style: TextStyle(fontFamily: 'Lexend', fontSize: 12, color: _destructive),
          ),
        ),
      ],
    );
  }
}
