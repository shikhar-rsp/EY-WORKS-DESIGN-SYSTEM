import 'package:flutter/material.dart';

class NavigationMenuDefault extends StatefulWidget {
  const NavigationMenuDefault({super.key});

  @override
  State<NavigationMenuDefault> createState() => _NavigationMenuDefaultState();
}

class _NavigationMenuDefaultState extends State<NavigationMenuDefault> {
  String? _openItem;

  Widget _trigger(String label, String id) {
    final isOpen = _openItem == id;
    return GestureDetector(
      onTap: () => setState(() => _openItem = isOpen ? null : id),
      child: Container(
        height: 36,
        padding: const EdgeInsets.symmetric(horizontal: 12),
        decoration: BoxDecoration(
          color: isOpen ? const Color(0xFFFAFAFA) : Colors.transparent, // --muted
          borderRadius: BorderRadius.circular(8),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              label,
              style: const TextStyle(
                fontFamily: 'Lexend',
                fontSize: 14,
                fontWeight: FontWeight.w500,
                color: Color(0xFF2E2B2B), // --foreground
              ),
            ),
            const SizedBox(width: 6),
            AnimatedRotation(
              turns: isOpen ? 0.5 : 0,
              duration: const Duration(milliseconds: 200),
              child: const Icon(Icons.keyboard_arrow_down, size: 14, color: Color(0xFF2E2B2B)),
            ),
          ],
        ),
      ),
    );
  }

  Widget _link(String label) {
    return Container(
      height: 36,
      padding: const EdgeInsets.symmetric(horizontal: 12),
      alignment: Alignment.center,
      child: Text(
        label,
        style: const TextStyle(
          fontFamily: 'Lexend',
          fontSize: 14,
          fontWeight: FontWeight.w500,
          color: Color(0xFF2E2B2B),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        _trigger('Getting Started', 'getting-started'),
        const SizedBox(width: 4),
        _trigger('Components', 'components'),
        const SizedBox(width: 4),
        _link('Documentation'),
      ],
    );
  }
}
