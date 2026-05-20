import 'package:flutter/material.dart';

class MenubarWithShortcuts extends StatelessWidget {
  const MenubarWithShortcuts({super.key});

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
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(4),
              ),
              child: const Text('Edit', style: TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500, color: Color(0xFF2E2B2B))),
            ),
            itemBuilder: (ctx) => [
              _buildItem('Undo', '⌘Z'),
              _buildItem('Redo', '⌘⇧Z'),
              const PopupMenuDivider(),
              _buildItem('Cut', '⌘X'),
              _buildItem('Copy', '⌘C'),
              _buildItem('Paste', '⌘V'),
            ],
          ),
        ],
      ),
    );
  }

  PopupMenuItem<String> _buildItem(String label, String shortcut) {
    return PopupMenuItem(
      value: label,
      child: Row(
        children: [
          Text(label, style: const TextStyle(fontSize: 14, color: Color(0xFF2E2B2B))),
          const Spacer(),
          Text(shortcut, style: const TextStyle(fontSize: 12, color: Color(0xFF7A7272), letterSpacing: 1.5)),
        ],
      ),
    );
  }
}
