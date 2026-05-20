import 'package:flutter/material.dart';

class AspectRatioRatios extends StatelessWidget {
  const AspectRatioRatios({super.key});

  @override
  Widget build(BuildContext context) {
    const ratios = [
      (label: '1 / 1', value: 1.0),
      (label: '4 / 3', value: 4 / 3),
      (label: '16 / 9', value: 16 / 9),
      (label: '21 / 9', value: 21 / 9),
    ];

    return Column(
      children: ratios.map((r) => Padding(
        padding: const EdgeInsets.only(bottom: 16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.only(bottom: 4),
              child: Text(
                r.label,
                style: const TextStyle(
                  fontFamily: 'Lexend', fontSize: 12,
                  color: Color(0xFF7A7272), // --muted-foreground
                ),
              ),
            ),
            AspectRatio(
              aspectRatio: r.value,
              child: Container(
                decoration: BoxDecoration(
                  color: const Color(0xFFFAFAFA), // --muted
                  borderRadius: BorderRadius.circular(8), // --radius-medium
                ),
                alignment: Alignment.center,
                child: Text(
                  r.label,
                  style: const TextStyle(
                    fontFamily: 'Lexend', fontSize: 14,
                    color: Color(0xFF7A7272), // --muted-foreground
                  ),
                ),
              ),
            ),
          ],
        ),
      )).toList(),
    );
  }
}
