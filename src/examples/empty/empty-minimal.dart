import 'package:flutter/material.dart';

class EmptyMinimal extends StatelessWidget {
  const EmptyMinimal({super.key});

  @override
  Widget build(BuildContext context) {
    return const Padding(
      padding: EdgeInsets.symmetric(vertical: 40, horizontal: 24),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(
            'Nothing here yet',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 16,
              fontWeight: FontWeight.w600,
              color: Color(0xFF2E2B2B), // --foreground
            ),
          ),
          SizedBox(height: 24),
          SizedBox(
            width: 280,
            child: Text(
              'Add items to see them listed here.',
              textAlign: TextAlign.center,
              style: TextStyle(
                fontFamily: 'Lexend',
                fontSize: 14,
                height: 1.625,
                color: Color(0xFF7A7272), // --muted-foreground
              ),
            ),
          ),
        ],
      ),
    );
  }
}
