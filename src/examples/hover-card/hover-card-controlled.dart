import 'package:flutter/material.dart';

class HoverCardControlled extends StatefulWidget {
  const HoverCardControlled({super.key});

  @override
  State<HoverCardControlled> createState() => _HoverCardControlledState();
}

class _HoverCardControlledState extends State<HoverCardControlled> {
  bool _open = false;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(40),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          ElevatedButton(
            onPressed: () => setState(() => _open = !_open),
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFFF4F4F4), // --secondary
              foregroundColor: const Color(0xFF2E2B2B), // --foreground
              elevation: 0,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(8),
                side: const BorderSide(color: Color(0xFFEBE9E8)),
              ),
              padding: const EdgeInsets.symmetric(horizontal: 12),
              minimumSize: const Size(0, 32),
              textStyle: const TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500),
            ),
            child: Text(_open ? 'Close card' : 'Open card'),
          ),
          const SizedBox(height: 16),
          const Text('@vercel',
            style: TextStyle(
              fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500,
              color: Color(0xFFF8785E), // --primary
              decoration: TextDecoration.underline,
              decorationColor: Color(0xFFF8785E),
            ),
          ),
          if (_open) ...[
            const SizedBox(height: 4),
            Container(
              width: 256,
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: const Color(0xFFFFFFFF),
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: const Color(0xFFEBE9E8)),
                boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.1), blurRadius: 24)],
              ),
              child: const Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Vercel', style: TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w600, color: Color(0xFF2E2B2B))),
                  SizedBox(height: 8),
                  Text('Build and deploy the best web experiences with the Vercel platform.',
                    style: TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF505258))),
                ],
              ),
            ),
          ],
        ],
      ),
    );
  }
}
