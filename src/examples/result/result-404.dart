import 'package:flutter/material.dart';

class Result404 extends StatelessWidget {
  const Result404({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            // Icon circle with numeric text
            Container(
              width: 96,
              height: 96,
              decoration: BoxDecoration(
                color: const Color(0xFFFAFAFA),
                shape: BoxShape.circle,
                border: Border.all(
                  color: const Color(0xFFE5E7EB),
                ),
              ),
              child: const Center(
                child: Text(
                  '404',
                  style: TextStyle(
                    fontSize: 28,
                    fontWeight: FontWeight.w700,
                    letterSpacing: -1.5,
                    color: Color(0xFF7A7272),
                  ),
                ),
              ),
            ),
            const SizedBox(height: 24),
            // Title
            const Text(
              'Page Not Found',
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
                "The page you are looking for doesn't exist.",
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
                'Go Home',
                style: TextStyle(fontSize: 14, fontWeight: FontWeight.w500),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
