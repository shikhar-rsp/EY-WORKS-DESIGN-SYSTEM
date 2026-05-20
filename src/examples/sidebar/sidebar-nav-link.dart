import 'package:flutter/material.dart';

class SidebarNavLinkStates extends StatelessWidget {
  const SidebarNavLinkStates({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 240,
      padding: const EdgeInsets.all(16), // --space-200
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          _NavLinkButton(label: 'Default', bgColor: const Color(0xFFFFFFFF), textColor: const Color(0xFF5C5655)), // bg --background, text --subtle
          const SizedBox(height: 8), // --space-100
          _NavLinkButton(label: 'Hover', bgColor: const Color(0xFFFEE4DF), textColor: const Color(0xFF5C5655)), // bg --primary-subtle, text --subtle
          const SizedBox(height: 8),
          _NavLinkButton(label: 'Selected', bgColor: const Color(0xFFFAFAFA), textColor: const Color(0xFF2E2B2B), fontWeight: FontWeight.w600), // bg --accent-gray-subtlest, text --foreground
          const SizedBox(height: 8),
          _NavLinkButton(label: 'Pressed', bgColor: const Color(0xFFFBAE9E), textColor: const Color(0xFF5C5655)), // bg --primary-subtle-pressed, text --subtle
          const SizedBox(height: 8),
          _NavLinkButton(label: 'Disabled', bgColor: const Color(0xFFFFFFFF), textColor: const Color(0x4F272424), enabled: false), // bg --background, text --disabled
        ],
      ),
    );
  }
}

class _NavLinkButton extends StatelessWidget {
  final String label;
  final Color bgColor;
  final Color textColor;
  final FontWeight fontWeight;
  final bool enabled;

  const _NavLinkButton({
    required this.label,
    required this.bgColor,
    required this.textColor,
    this.fontWeight = FontWeight.w400,
    this.enabled = true,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(8), // --space-100
      decoration: BoxDecoration(
        color: bgColor,
        borderRadius: BorderRadius.circular(8), // --radius-medium
      ),
      child: Opacity(
        opacity: enabled ? 1.0 : 0.6,
        child: Text(
          label,
          style: TextStyle(
            fontFamily: 'Lexend',
            fontSize: 14,
            height: 20 / 14,
            fontWeight: fontWeight,
            color: textColor,
          ),
        ),
      ),
    );
  }
}
