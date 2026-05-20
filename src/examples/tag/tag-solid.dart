import 'package:flutter/material.dart';

class TagSolid extends StatelessWidget {
  const TagSolid({super.key});

  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 12,
      runSpacing: 12,
      children: const [
        _SolidTag(label: 'Default', bgColor: Color(0xFFF4F4F4), textColor: Color(0xFF2E2B2B)), // --secondary / --foreground
        _SolidTag(label: 'Brand', bgColor: Color(0xFFF8785E), textColor: Color(0xFFFFFFFF)), // --primary / --primary-foreground
        _SolidTag(label: 'White', bgColor: Color(0xFFFFFFFF), textColor: Color(0xFF2E2B2B), borderColor: Color(0xFFEBE9E8)), // --background / --foreground / --border
        _SolidTag(label: 'Red', bgColor: Color(0xFFFF0000), textColor: Color(0xFFFFFFFF)), // --destructive-bold / --primary-foreground
        _SolidTag(label: 'Blue', bgColor: Color(0xFF2D70CF), textColor: Color(0xFFFFFFFF)), // --info-bold / --primary-foreground
        _SolidTag(label: 'Yellow', bgColor: Color(0xFFFBBF24), textColor: Color(0xFF2E2B2B)), // --warning-bold / --foreground
        _SolidTag(label: 'Purple', bgColor: Color(0xFF3D4884), textColor: Color(0xFFFFFFFF)), // --discovery-bold / --primary-foreground
        _SolidTag(label: 'Lime Green', bgColor: Color(0xFF4D7C0F), textColor: Color(0xFFFFFFFF)), // --success-bold / --primary-foreground
      ],
    );
  }
}

class _SolidTag extends StatelessWidget {
  final String label;
  final Color bgColor;
  final Color textColor;
  final Color? borderColor;

  const _SolidTag({
    required this.label,
    required this.bgColor,
    required this.textColor,
    this.borderColor,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 28,
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4), // --space-150, --space-050
      decoration: BoxDecoration(
        color: bgColor,
        borderRadius: BorderRadius.circular(99), // --radius-full
        border: borderColor != null ? Border.all(color: borderColor!, width: 1) : null,
      ),
      child: Text(
        label,
        style: TextStyle(
          fontFamily: 'Lexend',
          fontWeight: FontWeight.w400,
          fontSize: 14,
          height: 1.43,
          color: textColor,
        ),
      ),
    );
  }
}
