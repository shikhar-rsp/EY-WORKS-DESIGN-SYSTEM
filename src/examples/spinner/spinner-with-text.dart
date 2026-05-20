import 'package:flutter/material.dart';

class SpinnerWithText extends StatelessWidget {
  const SpinnerWithText({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        const SizedBox(
          width: 16,
          height: 16,
          child: CircularProgressIndicator(
            strokeWidth: 2,
            valueColor: AlwaysStoppedAnimation<Color>(
              Color(0xFF7A7272), // --muted-foreground
            ),
          ),
        ),
        const SizedBox(width: 8),
        const Text(
          'Loading…',
          style: TextStyle(
            fontSize: 14,
            color: Color(0xFF505258), // --secondary-foreground
          ),
        ),
      ],
    );
  }
}
