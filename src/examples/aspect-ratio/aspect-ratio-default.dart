import 'package:flutter/material.dart';

class AspectRatioDefault extends StatelessWidget {
  const AspectRatioDefault({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
      child: AspectRatio(
        aspectRatio: 16 / 9,
        child: Container(
          decoration: BoxDecoration(
            color: const Color(0xFFFAFAFA), // --muted
            borderRadius: BorderRadius.circular(8), // --radius-medium
          ),
          alignment: Alignment.center,
          child: const Text(
            '16 / 9',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 14,
              color: Color(0xFF7A7272), // --muted-foreground
            ),
          ),
        ),
      ),
    );
  }
}
