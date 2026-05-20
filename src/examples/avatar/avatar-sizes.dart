import 'package:flutter/material.dart';

class AvatarSizes extends StatelessWidget {
  const AvatarSizes({super.key});

  @override
  Widget build(BuildContext context) {
    const sizes = [
      (label: 'xs', size: 16.0, fontSize: 8.0),
      (label: 'sm', size: 24.0, fontSize: 10.0),
      (label: 'default', size: 32.0, fontSize: 12.0),
      (label: 'lg', size: 40.0, fontSize: 14.0),
      (label: 'xl', size: 48.0, fontSize: 14.0),
    ];

    return Row(
      crossAxisAlignment: CrossAxisAlignment.end,
      children: sizes.map((s) => Padding(
        padding: const EdgeInsets.only(right: 16),
        child: Column(
          children: [
            Container(
              width: s.size, height: s.size,
              decoration: const BoxDecoration(
                color: Color(0xFFFEE4DF), // --primary-subtle
                shape: BoxShape.circle,
              ),
              alignment: Alignment.center,
              child: Text(
                'MH',
                style: TextStyle(
                  fontFamily: 'Lexend',
                  fontSize: s.fontSize,
                  fontWeight: FontWeight.w500,
                  color: const Color(0xFF2E2B2B), // --foreground
                ),
              ),
            ),
            const SizedBox(height: 8),
            Text(
              s.label,
              style: const TextStyle(
                fontFamily: 'Lexend', fontSize: 12,
                color: Color(0xFF7A7272), // --muted-foreground
              ),
            ),
          ],
        ),
      )).toList(),
    );
  }
}
