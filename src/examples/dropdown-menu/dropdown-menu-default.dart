import 'package:flutter/material.dart';

class DropdownMenuDefault extends StatefulWidget {
  const DropdownMenuDefault({super.key});

  @override
  State<DropdownMenuDefault> createState() => _DropdownMenuDefaultState();
}

class _DropdownMenuDefaultState extends State<DropdownMenuDefault> {
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
            'My Account',
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
              Text('Profile', style: TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF2E2B2B))),
              Spacer(),
              Text('⇧⌘P', style: TextStyle(fontSize: 12, color: Color(0xFF7A7272))),
            ],
          ),
        ),
        PopupMenuItem(
          onTap: () {},
          child: Row(
            children: const [
              Text('Settings', style: TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF2E2B2B))),
              Spacer(),
              Text('⌘S', style: TextStyle(fontSize: 12, color: Color(0xFF7A7272))),
            ],
          ),
        ),
        const PopupMenuDivider(),
        PopupMenuItem(
          onTap: () {},
          child: Row(
            children: const [
              Text('Log out', style: TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFFCC0000))),
              Spacer(),
              Text('⇧⌘Q', style: TextStyle(fontSize: 12, color: Color(0xFF7A7272))),
            ],
          ),
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTapDown: (details) => _showMenu(context, details.globalPosition),
      child: Container(
        height: 36,
        padding: const EdgeInsets.symmetric(horizontal: 16),
        decoration: BoxDecoration(
          color: const Color(0xFFFFFFFF), // --background
          borderRadius: BorderRadius.circular(8), // --radius-medium
          border: Border.all(color: const Color(0xFFEBE9E8)), // --border
        ),
        alignment: Alignment.center,
        child: const Text(
          'Open Menu',
          style: TextStyle(
            fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500,
            color: Color(0xFFF8785E), // --primary
          ),
        ),
      ),
    );
  }
}
