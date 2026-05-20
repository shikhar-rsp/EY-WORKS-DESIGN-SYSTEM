import 'package:flutter/material.dart';

class ToggleGroupMultiple extends StatefulWidget {
  const ToggleGroupMultiple({super.key});

  @override
  State<ToggleGroupMultiple> createState() => _ToggleGroupMultipleState();
}

class _ToggleGroupMultipleState extends State<ToggleGroupMultiple> {
  final Set<String> _active = {'bold'};

  @override
  Widget build(BuildContext context) {
    final items = [
      {'val': 'bold', 'label': 'B'},
      {'val': 'italic', 'label': 'I'},
      {'val': 'underline', 'label': 'U'},
    ];
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: items.map((item) {
        final isOn = _active.contains(item['val']);
        return GestureDetector(
          onTap: () => setState(() {
            if (isOn) _active.remove(item['val']); else _active.add(item['val']!);
          }),
          child: Container(
            height: 36,
            constraints: const BoxConstraints(minWidth: 36),
            padding: const EdgeInsets.symmetric(horizontal: 12),
            decoration: BoxDecoration(
              color: isOn ? const Color(0xFFFAFAFA) : Colors.transparent,
              borderRadius: BorderRadius.circular(8),
            ),
            alignment: Alignment.center,
            child: Text(
              item['label']!,
              style: TextStyle(
                fontFamily: 'Lexend',
                fontWeight: FontWeight.w500,
                fontSize: 14,
                color: isOn ? const Color(0xFF2E2B2B) : const Color(0xFF7A7272),
                decoration: item['val'] == 'underline' ? TextDecoration.underline : null,
                fontStyle: item['val'] == 'italic' ? FontStyle.italic : null,
              ),
            ),
          ),
        );
      }).toList(),
    );
  }
}
