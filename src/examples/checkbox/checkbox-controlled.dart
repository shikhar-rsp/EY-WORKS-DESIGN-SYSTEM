import 'package:flutter/material.dart';

class CheckboxControlled extends StatefulWidget {
  const CheckboxControlled({super.key});

  @override
  State<CheckboxControlled> createState() => _CheckboxControlledState();
}

class _CheckboxControlledState extends State<CheckboxControlled> {
  bool _checked = false;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => setState(() => _checked = !_checked),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            width: 14,
            height: 14,
            decoration: BoxDecoration(
              color: _checked ? const Color(0xFFF8785E) : const Color(0xFFFFFFFF),
              borderRadius: BorderRadius.circular(4), // --radius-small
              border: Border.all(
                color: _checked ? const Color(0xFFF8785E) : const Color(0xFFEBE9E8),
                width: 1.5,
              ),
            ),
            child: _checked
                ? const Icon(Icons.check, size: 10, color: Colors.white)
                : null,
          ),
          const SizedBox(width: 8),
          const Text(
            'Controlled checkbox',
            style: TextStyle(
              fontSize: 14,
              color: Color(0xFF2E2B2B), // --foreground
            ),
          ),
        ],
      ),
    );
  }
}
