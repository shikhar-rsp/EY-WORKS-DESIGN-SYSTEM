import 'package:flutter/material.dart';

class MenubarDefault extends StatelessWidget {
  const MenubarDefault({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 36,
      padding: const EdgeInsets.symmetric(horizontal: 4), // --space-050
      decoration: BoxDecoration(
        color: const Color(0xFFFFFFFF), // --background
        borderRadius: BorderRadius.circular(8), // --radius-medium
        border: Border.all(color: const Color(0xFFEBE9E8)), // --border
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: ['File', 'Edit', 'View'].map((label) {
          return MenubarTriggerButton(label: label);
        }).toList(),
      ),
    );
  }
}

class MenubarTriggerButton extends StatefulWidget {
  final String label;
  const MenubarTriggerButton({super.key, required this.label});

  @override
  State<MenubarTriggerButton> createState() => _MenubarTriggerButtonState();
}

class _MenubarTriggerButtonState extends State<MenubarTriggerButton> {
  bool _hovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => _hovered = true),
      onExit: (_) => setState(() => _hovered = false),
      child: GestureDetector(
        onTap: () {},
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4), // --space-150, --space-050
          decoration: BoxDecoration(
            color: _hovered ? const Color(0xFFFAFAFA) : Colors.transparent, // --muted
            borderRadius: BorderRadius.circular(4), // --radius-small
          ),
          child: Text(
            widget.label,
            style: const TextStyle(
              fontFamily: 'Lexend',
              fontSize: 14,
              fontWeight: FontWeight.w500,
              color: Color(0xFF2E2B2B), // --foreground
            ),
          ),
        ),
      ),
    );
  }
}
