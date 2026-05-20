import 'package:flutter/material.dart';

class TagSubtle extends StatelessWidget {
  const TagSubtle({super.key});

  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 12,
      runSpacing: 12,
      children: const [
        _SubtleTag(label: 'Default', bgColor: Color(0xFFFAFAFA)), // --muted
        _SubtleTag(label: 'Brand', bgColor: Color(0xFFFFF5F3)), // --primary-subtlest
        _SubtleTag(label: 'White', bgColor: Color(0xFFFFFFFF)), // --background
        _SubtleTag(label: 'Red', bgColor: Color(0xFFFFE5E5)), // --destructive-subtle
        _SubtleTag(label: 'Blue', bgColor: Color(0xFFD7E8FF)), // --accent-blue
        _SubtleTag(label: 'Yellow', bgColor: Color(0xFFFEF3C7)), // --accent-yellow
        _SubtleTag(label: 'Purple', bgColor: Color(0xFFE0E3F6)), // --accent-purple
        _SubtleTag(label: 'Lime Green', bgColor: Color(0xFFECFCCB)), // --accent-lime
      ],
    );
  }
}

class _SubtleTag extends StatelessWidget {
  final String label;
  final Color bgColor;

  const _SubtleTag({required this.label, required this.bgColor});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 28,
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4), // --space-150, --space-050
      decoration: BoxDecoration(
        color: bgColor,
        borderRadius: BorderRadius.circular(99), // --radius-full
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
