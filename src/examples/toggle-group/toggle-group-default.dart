import 'package:flutter/material.dart';

class ToggleGroupDefault extends StatefulWidget {
  const ToggleGroupDefault({super.key});

  @override
  State<ToggleGroupDefault> createState() => _ToggleGroupDefaultState();
}

class _ToggleGroupDefaultState extends State<ToggleGroupDefault> {
  String _selected = 'center';

  @override
  Widget build(BuildContext context) {
    final options = ['left', 'center', 'right'];
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: options.map((opt) {
        final isOn = _selected == opt;
        return GestureDetector(
          onTap: () => setState(() => _selected = opt),
          child: Container(
            height: 36,
            constraints: const BoxConstraints(minWidth: 36),
            padding: const EdgeInsets.symmetric(horizontal: 12), // --space-150
            decoration: BoxDecoration(
              color: isOn ? const Color(0xFFFAFAFA) : Colors.transparent, // --muted
              borderRadius: BorderRadius.circular(8), // --radius-medium
            ),
            alignment: Alignment.center,
            child: Text(
              opt[0].toUpperCase() + opt.substring(1),
              style: TextStyle(
                fontFamily: 'Lexend',
                fontWeight: FontWeight.w500,
                fontSize: 14,
                color: isOn
                    ? const Color(0xFF2E2B2B) // --foreground
                    : const Color(0xFF7A7272), // --muted-foreground
              ),
            ),
          ),
        );
      }).toList(),
    );
  }
}
