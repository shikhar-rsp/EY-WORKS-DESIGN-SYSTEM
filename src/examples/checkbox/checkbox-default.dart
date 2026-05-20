import 'package:flutter/material.dart';

class CheckboxDefault extends StatefulWidget {
  const CheckboxDefault({super.key});

  @override
  State<CheckboxDefault> createState() => _CheckboxDefaultState();
}

class _CheckboxDefaultState extends State<CheckboxDefault> {
  bool _checked = false;

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Checkbox(
          value: _checked,
          onChanged: (v) => setState(() => _checked = v ?? false),
          activeColor: const Color(0xFFF8785E), // --primary
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(4)),
          side: const BorderSide(color: Color(0xFFADA5A5)), // --border-input
        ),
        const Text(
          'Enable feature',
          style: TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF2E2B2B)),
        ),
      ],
    );
  }
}
