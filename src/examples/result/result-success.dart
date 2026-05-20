import 'package:flutter/material.dart';

class ResultSuccess extends StatelessWidget {
  const ResultSuccess({super.key});

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
                color: const Color(0xFF65A30D).withOpacity(0.1),
                shape: BoxShape.circle,
                border: Border.all(
                  color: const Color(0xFF65A30D).withOpacity(0.2),
                ),
              ),
              child: const Icon(
                Icons.check_circle,
                size: 64,
                color: Color(0xFF65A30D),
              ),
            ),
            const SizedBox(height: 24),
            // Title
            const Text(
              'Payment Successful',
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
                'Your order #12345 has been confirmed. A receipt has been sent to your email.',
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
            Wrap(
              alignment: WrapAlignment.center,
              spacing: 16,
              children: [
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
                    'View Order',
                    style: TextStyle(fontSize: 14, fontWeight: FontWeight.w500),
                  ),
                ),
                OutlinedButton(
                  onPressed: () {},
                  style: OutlinedButton.styleFrom(
                    foregroundColor: const Color(0xFFF8785E),
                    minimumSize: const Size(0, 36),
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8),
                    ),
                    side: const BorderSide(color: Color(0xFFE5E7EB)),
                  ),
                  child: const Text(
                    'Back to Home',
                    style: TextStyle(fontSize: 14, fontWeight: FontWeight.w500),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
