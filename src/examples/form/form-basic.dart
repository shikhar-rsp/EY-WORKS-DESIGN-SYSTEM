import 'package:flutter/material.dart';

class FormBasic extends StatefulWidget {
  const FormBasic({super.key});

  @override
  State<FormBasic> createState() => _FormBasicState();
}

class _FormBasicState extends State<FormBasic> {
  final _formKey = GlobalKey<FormState>();
  final _emailController = TextEditingController();

  @override
  void dispose() {
    _emailController.dispose();
    super.dispose();
  }

  void _handleSubmit() {
    debugPrint('Submitted: { email: ${_emailController.text} }');
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 320,
      child: Form(
        key: _formKey,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            // FormField / FormItem
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  'Email',
                  style: TextStyle(
                    fontFamily: 'Lexend',
                    fontSize: 14,
                    fontWeight: FontWeight.w500,
                    height: 1,
                    color: Color(0xFF2E2B2B), // --foreground
                  ),
                ),
                const SizedBox(height: 6), // --space-075
                TextField(
                  controller: _emailController,
                  keyboardType: TextInputType.emailAddress,
                  style: const TextStyle(
                    fontFamily: 'Lexend',
                    fontSize: 14,
                    color: Color(0xFF2E2B2B), // --foreground
                  ),
                  decoration: const InputDecoration(
                    hintText: 'you@example.com',
                    hintStyle: TextStyle(color: Color(0xFFC7C6C6)), // --placeholder
                    contentPadding: EdgeInsets.symmetric(horizontal: 16), // --space-200
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.all(Radius.circular(8)), // --radius-medium
                      borderSide: BorderSide(color: Color(0xFFADA5A5)), // --border-input
                    ),
                    enabledBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.all(Radius.circular(8)),
                      borderSide: BorderSide(color: Color(0xFFADA5A5)),
                    ),
                    focusedBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.all(Radius.circular(8)),
                      borderSide: BorderSide(color: Color(0xFF8290DD), width: 2), // --ring
                    ),
                    isDense: true,
                    filled: true,
                    fillColor: Color(0xFFFFFFFF), // --background
                  ),
                ),
                const SizedBox(height: 6),
                const Text(
                  "We'll never share your email.",
                  style: TextStyle(
                    fontFamily: 'Lexend',
                    fontSize: 12,
                    height: 1.625,
                    color: Color(0xFF7A7272), // --muted-foreground
                  ),
                ),
              ],
            ),
            const SizedBox(height: 16), // --space-200
            // Submit button
            SizedBox(
              height: 36,
              child: ElevatedButton(
                onPressed: _handleSubmit,
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFFF8785E), // --primary
                  foregroundColor: const Color(0xFFFFFFFF), // --primary-foreground
                  elevation: 0,
                  shape: const RoundedRectangleBorder(
                    borderRadius: BorderRadius.all(Radius.circular(8)),
                  ),
                  padding: const EdgeInsets.symmetric(horizontal: 16),
                  textStyle: const TextStyle(
                    fontFamily: 'Lexend',
                    fontSize: 14,
                    fontWeight: FontWeight.w500,
                  ),
                ),
                child: const Text('Submit'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
