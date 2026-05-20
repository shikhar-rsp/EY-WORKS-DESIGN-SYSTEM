import 'package:flutter/material.dart';

class BadgeColors extends StatelessWidget {
  const BadgeColors({super.key});

  @override
  Widget build(BuildContext context) {
    const colors = [
      _BadgeColorData(label: 'D', bg: Color(0xFFCC0000), fg: Colors.white),   // danger
      _BadgeColorData(label: 'P', bg: Color(0xFFF8785E), fg: Colors.white),   // primary
      _BadgeColorData(label: 'S', bg: Color(0xFF65A30D), fg: Colors.white),   // success
      _BadgeColorData(label: 'W', bg: Color(0xFFFBBF24), fg: Colors.white),   // warning
    ];

    return Row(
      mainAxisSize: MainAxisSize.min,
      children: colors.map((c) => Padding(
        padding: const EdgeInsets.only(right: 24),
        child: Stack(
          clipBehavior: Clip.none,
          children: [
            Container(
              width: 32, height: 32,
              decoration: const BoxDecoration(
                color: Color(0xFFFAFAFA), // --muted
                shape: BoxShape.circle,
              ),
              alignment: Alignment.center,
              child: Text(c.label, style: const TextStyle(fontFamily: 'Lexend', fontSize: 12, fontWeight: FontWeight.w500, color: Color(0xFF2E2B2B))),
            ),
            Positioned(
              top: -4, right: -4,
              child: Container(
                constraints: const BoxConstraints(minWidth: 18),
                height: 18,
                padding: const EdgeInsets.symmetric(horizontal: 4),
                decoration: BoxDecoration(
                  color: c.bg,
                  borderRadius: BorderRadius.circular(9999),
                  border: Border.all(color: Colors.white, width: 2),
                ),
                alignment: Alignment.center,
                child: Text('3', style: TextStyle(fontFamily: 'Lexend', fontSize: 10, fontWeight: FontWeight.w600, color: c.fg, height: 1)),
              ),
            ),
          ],
        ),
      )).toList(),
    );
  }
}

class _BadgeColorData {
  const _BadgeColorData({required this.label, required this.bg, required this.fg});
  final String label;
  final Color bg;
  final Color fg;
}
