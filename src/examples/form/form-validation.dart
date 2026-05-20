import 'package:flutter/material.dart';

class FormValidation extends StatefulWidget {
  const FormValidation({super.key});

  @override
  State<FormValidation> createState() => _FormValidationState();
}

class _FormValidationState extends State<FormValidation> {
  final _usernameController = TextEditingController();
  bool _showError = false;

  @override
  void dispose() {
    _usernameController.dispose();
    super.dispose();
  }

  void _handleSubmit() {
    final value = _usernameController.text.trim();
    if (value.isEmpty) {
      setState(() => _showError = true);
      return;
    }
    setState(() => _showError = false);
    debugPrint('Submitted: { username: $value }');
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 320,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          // FormField / FormItem
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Username',
                style: TextStyle(
                  fontFamily: 'Lexend',
                  fontSize: 14,
                  fontWeight: FontWeight.w500,
                  height: 1,
                  color: _showError
                      ? const Color(0xFFCC0000) // --destructive
                      : const Color(0xFF2E2B2B), // --foreground
                ),
              ),
              const SizedBox(height: 6), // --space-075
              TextField(
                controller: _usernameController,
                style: const TextStyle(
                  fontFamily: 'Lexend',
                  fontSize: 14,
                  color: Color(0xFF2E2B2B), // --foreground
                ),
                decoration: InputDecoration(
                  hintText: 'Enter a username',
                  hintStyle: const TextStyle(color: Color(0xFFC7C6C6)), // --placeholder
                  contentPadding: const EdgeInsets.symmetric(horizontal: 16),
                  border: OutlineInputBorder(
                    borderRadius: const BorderRadius.all(Radius.circular(8)),
                    borderSide: BorderSide(
                      color: _showError
                          ? const Color(0xFFCC0000) // --destructive
                          : const Color(0xFFADA5A5), // --border-input
                    ),
                  ),
                  enabledBorder: OutlineInputBorder(
                    borderRadius: const BorderRadius.all(Radius.circular(8)),
                    borderSide: BorderSide(
                      color: _showError
                          ? const Color(0xFFCC0000)
                          : const Color(0xFFADA5A5),
                    ),
                  ),
                  focusedBorder: OutlineInputBorder(
                    borderRadius: const BorderRadius.all(Radius.circular(8)),
                    borderSide: BorderSide(
                      color: _showError
                          ? const Color(0xFFCC0000)
                          : const Color(0xFF8290DD), // --ring
                      width: 2,
                    ),
                  ),
                  isDense: true,
                  filled: true,
                  fillColor: const Color(0xFFFFFFFF), // --background
                ),
              ),
              if (_showError) ...[
                const SizedBox(height: 6),
                const Text(
                  'This field is required',
                  style: TextStyle(
                    fontFamily: 'Lexend',
                    fontSize: 12,
                    height: 1.625,
                    color: Color(0xFFCC0000), // --destructive
                  ),
                ),
              ],
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
    );
  }
}
