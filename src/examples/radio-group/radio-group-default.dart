import 'package:flutter/material.dart';

class RadioGroupDefault extends StatefulWidget {
  const RadioGroupDefault({super.key});

  @override
  State<RadioGroupDefault> createState() => _RadioGroupDefaultState();
}

class _RadioGroupDefaultState extends State<RadioGroupDefault> {
  String _selected = 'comfortable';

  final List<String> _options = ['Default', 'Comfortable', 'Spacious'];

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: _options
          .map(
            (opt) => GestureDetector(
              onTap: () => setState(() => _selected = opt.toLowerCase()),
              child: Padding(
                padding: const EdgeInsets.symmetric(vertical: 4),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Radio<String>(
                      value: opt.toLowerCase(),
                      groupValue: _selected,
                      onChanged: (v) => setState(() => _selected = v!),
                      activeColor: const Color(0xFFF8785E), // --primary
                    ),
                    const SizedBox(width: 8),
                    Text(
                      opt,
                      style: const TextStyle(
                        fontFamily: 'Lexend',
                        fontSize: 14,
                        color: Color(0xFF2E2B2B), // --foreground
                      ),
                    ),
                  ],
                ),
              ),
            ),
          )
          .toList(),
    );
  }
}
