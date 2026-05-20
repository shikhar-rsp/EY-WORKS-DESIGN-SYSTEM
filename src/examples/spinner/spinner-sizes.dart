import 'package:flutter/material.dart';

class SpinnerSizes extends StatelessWidget {
  const SpinnerSizes({super.key});

  @override
  Widget build(BuildContext context) {
    const sizes = [12.0, 16.0, 24.0, 32.0];
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: sizes.map((size) => Padding(
        padding: const EdgeInsets.only(right: 24),
        child: SizedBox(
          width: size,
          height: size,
          child: const CircularProgressIndicator(
            strokeWidth: 2,
            valueColor: AlwaysStoppedAnimation<Color>(
              Color(0xFF7A7272), // --muted-foreground
            ),
          ),
        ),
      )).toList(),
    );
  }
}
