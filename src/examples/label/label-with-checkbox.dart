import 'package:flutter/material.dart';

class LabelWithCheckbox extends StatefulWidget {
  const LabelWithCheckbox({super.key});

  @override
  State<LabelWithCheckbox> createState() => _LabelWithCheckboxState();
}

class _LabelWithCheckboxState extends State<LabelWithCheckbox> {
  bool _checked = false;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => setState(() => _checked = !_checked),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Checkbox(
            value: _checked,
            onChanged: (val) => setState(() => _checked = val ?? false),
            activeColor: const Color(0xFFF8785E), // --primary
            side: const BorderSide(color: Color(0xFFADA5A5)), // --border-input
          ),
          const SizedBox(width: 4),
          const Text(
            'Accept terms and conditions',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 14,
              fontWeight: FontWeight.w500,
              color: Color(0xFF2E2B2B), // --foreground
            ),
          ),
        ],
      ),
    );
  }
}
