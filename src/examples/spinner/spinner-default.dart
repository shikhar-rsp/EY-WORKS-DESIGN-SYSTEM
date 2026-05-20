import 'package:flutter/material.dart';

class SpinnerDefault extends StatelessWidget {
  const SpinnerDefault({super.key});

  @override
  Widget build(BuildContext context) {
    return const SizedBox(
      width: 16,
      height: 16,
      child: CircularProgressIndicator(
        strokeWidth: 2,
        valueColor: AlwaysStoppedAnimation<Color>(
          Color(0xFF7A7272), // --muted-foreground
        ),
      ),
    );
  }
}
