import 'package:flutter/material.dart';

class ProgressDefault extends StatelessWidget {
  const ProgressDefault({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 256,
      child: LinearProgressIndicator(
        value: 0.60,
        backgroundColor: const Color(0xFFFAFAFA), // --muted
        valueColor: const AlwaysStoppedAnimation<Color>(
          Color(0xFFF8785E), // --primary
        ),
        borderRadius: BorderRadius.circular(99), // --radius-full
        minHeight: 8,
      ),
    );
  }
}
