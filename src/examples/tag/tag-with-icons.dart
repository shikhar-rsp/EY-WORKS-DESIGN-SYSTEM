import 'package:flutter/material.dart';

class TagWithIcons extends StatelessWidget {
  const TagWithIcons({super.key});

  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 12,
      runSpacing: 12,
      children: const [
        _IconTag(
          label: 'With Left Icon',
          bgColor: Color(0xFFF8785E), // --primary
          textColor: Color(0xFFFFFFFF), // --primary-foreground
          leftIcon: true,
        ),
        _IconTag(
          label: 'Dismissible',
          bgColor: Color(0xFFF8785E), // --primary
          textColor: Color(0xFFFFFFFF), // --primary-foreground
          rightIcon: true,
        ),
        _IconTag(
          label: 'Both Icons',
          bgColor: Color(0xFFF8785E), // --primary
          textColor: Color(0xFFFFFFFF), // --primary-foreground
          leftIcon: true,
          rightIcon: true,
        ),
        _IconTag(
          label: 'With Left Icon',
          bgColor: Colors.transparent,
          textColor: Color(0xFF2E2B2B), // --foreground
          borderColor: Color(0xFFEBE9E8), // --border
          leftIcon: true,
        ),
        _IconTag(
          label: 'Dismissible',
          bgColor: Colors.transparent,
          textColor: Color(0xFF2E2B2B), // --foreground
          borderColor: Color(0xFFEBE9E8), // --border
          rightIcon: true,
        ),
        _IconTag(
          label: 'Remove',
          bgColor: Color(0xFFFFE5E5), // --destructive-subtle
          textColor: Color(0xFF2E2B2B), // --foreground
          rightIcon: true,
        ),
      ],
    );
  }
}

class _IconTag extends StatelessWidget {
  final String label;
  final Color bgColor;
  final Color textColor;
  final Color? borderColor;
  final bool leftIcon;
  final bool rightIcon;

  const _IconTag({
    required this.label,
    required this.bgColor,
    required this.textColor,
    this.borderColor,
    this.leftIcon = false,
    this.rightIcon = false,
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
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          if (leftIcon) ...[
            Icon(Icons.arrow_back_rounded, size: 12, color: textColor),
            const SizedBox(width: 4), // --space-050
          ],
          Text(
            label,
            style: TextStyle(
              fontFamily: 'Lexend',
              fontWeight: FontWeight.w400,
              fontSize: 14,
              height: 1.43,
              color: textColor,
            ),
          ),
          if (rightIcon) ...[
            const SizedBox(width: 4), // --space-050
            Icon(Icons.close_rounded, size: 12, color: textColor),
          ],
        ],
      ),
    );
  }
}
