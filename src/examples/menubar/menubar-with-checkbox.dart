import 'package:flutter/material.dart';

class MenubarWithCheckbox extends StatefulWidget {
  const MenubarWithCheckbox({super.key});

  @override
  State<MenubarWithCheckbox> createState() => _MenubarWithCheckboxState();
}

class _MenubarWithCheckboxState extends State<MenubarWithCheckbox> {
  bool _showRuler = true;
  bool _showGrid = false;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 36,
      padding: const EdgeInsets.symmetric(horizontal: 4),
      decoration: BoxDecoration(
        color: const Color(0xFFFFFFFF), // --background
        borderRadius: BorderRadius.circular(8), // --radius-medium
        border: Border.all(color: const Color(0xFFEBE9E8)), // --border
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          PopupMenuButton<String>(
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
              child: const Text('View', style: TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500, color: Color(0xFF2E2B2B))),
            ),
            onSelected: (value) {
              setState(() {
                if (value == 'ruler') _showRuler = !_showRuler;
                if (value == 'grid') _showGrid = !_showGrid;
              });
            },
            itemBuilder: (ctx) => [
              PopupMenuItem(value: 'ruler', child: Row(children: [
                SizedBox(width: 20, child: _showRuler ? const Icon(Icons.check, size: 14, color: Color(0xFF2E2B2B)) : null),
                const Text('Show Ruler'),
              ])),
              PopupMenuItem(value: 'grid', child: Row(children: [
                SizedBox(width: 20, child: _showGrid ? const Icon(Icons.check, size: 14, color: Color(0xFF2E2B2B)) : null),
                const Text('Show Grid'),
              ])),
            ],
          ),
        ],
      ),
    );
  }
}
