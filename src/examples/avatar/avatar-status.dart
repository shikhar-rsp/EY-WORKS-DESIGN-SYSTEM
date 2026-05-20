import 'package:flutter/material.dart';

class AvatarStatus extends StatelessWidget {
  const AvatarStatus({super.key});

  @override
  Widget build(BuildContext context) {
    const statuses = [
      (label: 'online', color: Color(0xFF65A30D)),      // --success
      (label: 'offline', color: Color(0xFF7A7272)),     // --muted-foreground
      (label: 'busy', color: Color(0xFFCC0000)),        // --destructive
      (label: 'away', color: Color(0xFFD97706)),        // --warning
    ];

    return Row(
      children: statuses.map((s) => Padding(
        padding: const EdgeInsets.only(right: 16),
        child: Column(
          children: [
            Stack(
              clipBehavior: Clip.none,
              children: [
                Container(
                  width: 40, height: 40,
                  decoration: const BoxDecoration(
                    color: Color(0xFFFEE4DF), // --primary-subtle
                    shape: BoxShape.circle,
                  ),
                  alignment: Alignment.center,
                  child: const Text(
                    'MH',
                    style: TextStyle(
                      fontFamily: 'Lexend', fontSize: 14,
                      fontWeight: FontWeight.w500,
                      color: Color(0xFF2E2B2B),
                    ),
                  ),
                ),
                Positioned(
                  bottom: -2, right: -2,
                  child: Container(
                    width: 10, height: 10,
                    decoration: BoxDecoration(
                      color: s.color,
                      shape: BoxShape.circle,
                      border: Border.all(color: Colors.white, width: 2),
                    ),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 8),
            Text(
              s.label,
              style: const TextStyle(
                fontFamily: 'Lexend', fontSize: 12,
                color: Color(0xFF7A7272),
              ),
            ),
          ],
        ),
      )).toList(),
    );
  }
}
