import 'package:flutter/material.dart';

class ContextMenuDefault extends StatelessWidget {
  const ContextMenuDefault({super.key});

  void _showMenu(BuildContext context, Offset position) {
    showMenu(
      context: context,
      position: RelativeRect.fromLTRB(
        position.dx, position.dy, position.dx + 1, position.dy + 1,
      ),
      color: const Color(0xFFFFFFFF), // --background
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16), // --radius-large
        side: const BorderSide(color: Color(0xFFEBE9E8)), // --border
      ),
      items: [
        const PopupMenuItem(
          enabled: false,
          height: 32,
          child: Text(
            'Actions',
            style: TextStyle(
              fontFamily: 'Lexend', fontSize: 12, fontWeight: FontWeight.w600,
              color: Color(0xFF7A7272), // --muted-foreground
            ),
          ),
        ),
        const PopupMenuDivider(),
        PopupMenuItem(
          onTap: () {},
          child: Row(
            children: const [
              Text('Back', style: TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF2E2B2B))),
              Spacer(),
              Text('⌘[', style: TextStyle(fontSize: 12, color: Color(0xFF7A7272))),
            ],
          ),
        ),
        PopupMenuItem(
          onTap: () {},
          child: Row(
            children: const [
              Text('Forward', style: TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF2E2B2B))),
              Spacer(),
              Text('⌘]', style: TextStyle(fontSize: 12, color: Color(0xFF7A7272))),
            ],
          ),
        ),
        PopupMenuItem(
          onTap: () {},
          child: Row(
            children: const [
              Text('Reload', style: TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF2E2B2B))),
              Spacer(),
              Text('⌘R', style: TextStyle(fontSize: 12, color: Color(0xFF7A7272))),
            ],
          ),
        ),
        const PopupMenuDivider(),
        PopupMenuItem(
          onTap: () {},
          child: const Text(
            'Delete',
            style: TextStyle(
              fontFamily: 'Lexend', fontSize: 14,
              color: Color(0xFFCC0000), // --destructive
            ),
          ),
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onSecondaryTapDown: (details) => _showMenu(context, details.globalPosition),
      onLongPressStart: (details) => _showMenu(context, details.globalPosition),
      child: Container(
        height: 128,
        width: 256,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(16),
          border: Border.all(
            color: const Color(0xFFEBE9E8), // --border
            style: BorderStyle.solid,
          ),
        ),
        alignment: Alignment.center,
        child: const Text(
          'Right-click here',
          style: TextStyle(
            fontFamily: 'Lexend', fontSize: 14,
            color: Color(0xFF7A7272), // --muted-foreground
          ),
        ),
      ),
    );
  }
}
