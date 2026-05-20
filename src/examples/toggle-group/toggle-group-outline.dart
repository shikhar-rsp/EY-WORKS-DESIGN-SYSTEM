import 'package:flutter/material.dart';

class ToggleGroupOutline extends StatefulWidget {
  const ToggleGroupOutline({super.key});

  @override
  State<ToggleGroupOutline> createState() => _ToggleGroupOutlineState();
}

class _ToggleGroupOutlineState extends State<ToggleGroupOutline> {
  String _selected = 'monthly';

  @override
  Widget build(BuildContext context) {
    final options = ['daily', 'weekly', 'monthly'];
    return Container(
      decoration: BoxDecoration(
        border: Border.all(color: const Color(0xFFEBE9E8)), // --border
        borderRadius: BorderRadius.circular(8), // --radius-medium
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: options.asMap().entries.map((entry) {
          final i = entry.key;
          final opt = entry.value;
          final isOn = _selected == opt;
          return GestureDetector(
            onTap: () => setState(() => _selected = opt),
            child: Container(
              height: 36,
              constraints: const BoxConstraints(minWidth: 36),
              padding: const EdgeInsets.symmetric(horizontal: 12),
              decoration: BoxDecoration(
                color: isOn ? const Color(0xFFFAFAFA) : Colors.transparent,
                border: i < options.length - 1
                    ? const Border(right: BorderSide(color: Color(0xFFEBE9E8)))
                    : null,
                borderRadius: i == 0
                    ? const BorderRadius.horizontal(left: Radius.circular(7))
                    : i == options.length - 1
                        ? const BorderRadius.horizontal(right: Radius.circular(7))
                        : null,
              ),
              alignment: Alignment.center,
              child: Text(
                opt[0].toUpperCase() + opt.substring(1),
                style: TextStyle(
                  fontFamily: 'Lexend',
                  fontWeight: FontWeight.w500,
                  fontSize: 14,
                  color: isOn ? const Color(0xFF2E2B2B) : const Color(0xFF7A7272),
                ),
              ),
            ),
          );
        }).toList(),
      ),
    );
  }
}
