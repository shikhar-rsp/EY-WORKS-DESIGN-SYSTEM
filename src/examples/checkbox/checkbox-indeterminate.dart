import 'package:flutter/material.dart';

class CheckboxIndeterminate extends StatelessWidget {
  const CheckboxIndeterminate({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Checkbox(
          tristate: true,
          value: null,
          onChanged: null,
          activeColor: const Color(0xFFF8785E), // --primary
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(4)),
          side: const BorderSide(color: Color(0xFFADA5A5)),
        ),
        const Text(
          'Select all',
          style: TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF2E2B2B)),
        ),
      ],
    );
  }
}
