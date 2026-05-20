import 'package:flutter/material.dart';

class ToastPromise extends StatelessWidget {
  const ToastPromise({super.key});

  Future<void> _runPromise(BuildContext context) async {
    final messenger = ScaffoldMessenger.of(context);

    // loading state
    messenger.showSnackBar(
      const SnackBar(
        content: Text(
          'Saving changes\u2026',
          style: TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500, color: Color(0xFF2E2B2B)),
        ),
        backgroundColor: Color(0xFFD7E8FF), // --accent-blue (info solid)
        duration: Duration(seconds: 10),
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.all(Radius.circular(8))),
      ),
    );

    // simulate async work
    await Future.delayed(const Duration(seconds: 2));

    messenger.hideCurrentSnackBar();

    // success state
    messenger.showSnackBar(
      const SnackBar(
        content: Text(
          'Changes saved!',
          style: TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500, color: Color(0xFF2E2B2B)),
        ),
        backgroundColor: Color(0xFFECFCCB), // --accent-lime (success solid)
        duration: Duration(seconds: 4),
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.all(Radius.circular(8))),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () => _runPromise(context),
      style: ElevatedButton.styleFrom(
        backgroundColor: Colors.white,
        foregroundColor: const Color(0xFF2E2B2B), // --foreground
        side: const BorderSide(color: Color(0xFFEBE9E8)), // --border
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
        textStyle: const TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w400),
      ),
      child: const Text('toast.promise()'),
    );
  }
}
