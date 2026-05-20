import 'package:flutter/material.dart';

class CheckboxOutline extends StatefulWidget {
  const CheckboxOutline({super.key});

  @override
  State<CheckboxOutline> createState() => _CheckboxOutlineState();
}

class _CheckboxOutlineState extends State<CheckboxOutline> {
  bool _checked = false;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        border: Border.all(color: const Color(0xFFEBE9E8)), // --border
        borderRadius: BorderRadius.circular(8),
        color: const Color(0xFFFFFFFF), // --disabled-surface
      ),
      padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Checkbox(
            value: _checked,
            onChanged: (v) => setState(() => _checked = v ?? false),
            activeColor: const Color(0xFFF8785E), // --primary
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(4)),
            side: const BorderSide(color: Color(0xFFADA5A5)),
          ),
          const Text(
            'Outline checkbox',
            style: TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF2E2B2B)),
          ),
        ],
      ),
    );
  }
}
