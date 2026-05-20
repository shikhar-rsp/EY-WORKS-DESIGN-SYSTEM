import 'package:flutter/material.dart';

class ResultError extends StatelessWidget {
  const ResultError({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            // Icon circle
            Container(
              width: 96,
              height: 96,
              decoration: BoxDecoration(
                color: const Color(0xFFCC0000).withOpacity(0.1),
                shape: BoxShape.circle,
                border: Border.all(
                  color: const Color(0xFFCC0000).withOpacity(0.2),
                ),
              ),
              child: const Icon(
                Icons.cancel,
                size: 64,
                color: Color(0xFFCC0000),
              ),
            ),
            const SizedBox(height: 24),
            // Title
            const Text(
              'Submission Failed',
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.w600,
                color: Color(0xFF2E2B2B),
              ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 24),
            // Description
            const SizedBox(
              width: 384,
              child: Text(
                'There was an error processing your request. Please try again.',
                style: TextStyle(
                  fontSize: 14,
                  height: 1.625,
                  color: Color(0xFF7A7272),
                ),
                textAlign: TextAlign.center,
              ),
            ),
            const SizedBox(height: 24),
            // Actions
            ElevatedButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xFFF8785E),
                foregroundColor: const Color(0xFFFFFFFF),
                minimumSize: const Size(0, 36),
                padding: const EdgeInsets.symmetric(horizontal: 16),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8),
                ),
                elevation: 0,
              ),
              child: const Text(
                'Try Again',
                style: TextStyle(fontSize: 14, fontWeight: FontWeight.w500),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
