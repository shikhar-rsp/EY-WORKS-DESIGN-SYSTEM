import 'package:flutter/material.dart';

class ToastWithAction extends StatelessWidget {
  const ToastWithAction({super.key});

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () {
        final messenger = ScaffoldMessenger.of(context);
        messenger.showSnackBar(
          SnackBar(
            content: const Text(
              'File removed.',
              style: TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500, color: Color(0xFF2E2B2B)),
            ),
            backgroundColor: const Color(0xFFFFCCCC), // --accent-red-subtlest
            duration: const Duration(seconds: 4),
            behavior: SnackBarBehavior.floating,
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
            action: SnackBarAction(
              label: 'Undo',
              textColor: const Color(0xFFF8785E), // --primary
              onPressed: () {
                messenger.showSnackBar(
                  const SnackBar(
                    content: Text(
                      'File restored.',
                      style: TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500, color: Color(0xFF2E2B2B)),
                    ),
                    backgroundColor: Color(0xFFECFCCB), // --accent-lime
                    duration: Duration(seconds: 4),
                    behavior: SnackBarBehavior.floating,
                  ),
                );
              },
            ),
          ),
        );
      },
      style: ElevatedButton.styleFrom(
        backgroundColor: Colors.white,
        foregroundColor: const Color(0xFF2E2B2B), // --foreground
        side: const BorderSide(color: Color(0xFFEBE9E8)), // --border
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
        textStyle: const TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w400),
      ),
      child: const Text('Show toast with action'),
    );
  }
}
