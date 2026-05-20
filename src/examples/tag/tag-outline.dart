import 'package:flutter/material.dart';

class TagOutline extends StatelessWidget {
  const TagOutline({super.key});

  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 12,
      runSpacing: 12,
      children: const [
        _OutlineTag(label: 'Default', borderColor: Color(0xFFEBE9E8)), // --border
        _OutlineTag(label: 'Brand', borderColor: Color(0xFFF8785E)), // --primary
        _OutlineTag(label: 'White', borderColor: Color(0xFFEBE9E8)), // --border
        _OutlineTag(label: 'Red', borderColor: Color(0xFFCC0000)), // --destructive
        _OutlineTag(label: 'Blue', borderColor: Color(0xFF2D70CF)), // --info
        _OutlineTag(label: 'Yellow', borderColor: Color(0xFFD97706)), // --warning
        _OutlineTag(label: 'Purple', borderColor: Color(0xFF505EAC)), // --discovery
        _OutlineTag(label: 'Lime Green', borderColor: Color(0xFF65A30D)), // --success
      ],
    );
  }
}

class _OutlineTag extends StatelessWidget {
  final String label;
  final Color borderColor;

  const _OutlineTag({required this.label, required this.borderColor});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 28,
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4), // --space-150, --space-050
      decoration: BoxDecoration(
        color: Colors.transparent,
        borderRadius: BorderRadius.circular(99), // --radius-full
        border: Border.all(color: borderColor, width: 1),
      ),
      child: Text(
        label,
        style: const TextStyle(
          fontFamily: 'Lexend',
          fontWeight: FontWeight.w400,
          fontSize: 14,
          height: 1.43,
          color: Color(0xFF2E2B2B), // --foreground
        ),
      ),
    );
  }
}
