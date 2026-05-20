import 'package:flutter/material.dart';

class SwitchWithLabel extends StatefulWidget {
  const SwitchWithLabel({super.key});

  @override
  State<SwitchWithLabel> createState() => _SwitchWithLabelState();
}

class _SwitchWithLabelState extends State<SwitchWithLabel> {
  bool _checked = false;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => setState(() => _checked = !_checked),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Switch(
            value: _checked,
            onChanged: (value) => setState(() => _checked = value),
            activeColor: const Color(0xFFFFFFFF), // --primary-foreground
            activeTrackColor: const Color(0xFFF8785E), // --primary
            inactiveThumbColor: const Color(0xFFFFFFFF),
            inactiveTrackColor: const Color(0xFFC2BCBB), // --muted-active
          ),
          const SizedBox(width: 8),
          const Text(
            'Enable notifications',
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
