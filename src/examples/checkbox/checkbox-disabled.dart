import 'package:flutter/material.dart';

class CheckboxDisabled extends StatelessWidget {
  const CheckboxDisabled({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Checkbox(
          value: true,
          onChanged: null,
          activeColor: const Color(0xFFF8785E), // --primary
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(4)),
        ),
        const Text(
          'Disabled',
          style: TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF2E2B2B)),
        ),
      ],
    );
  }
}
