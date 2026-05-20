import 'package:flutter/material.dart';

class RadioGroupHorizontal extends StatefulWidget {
  const RadioGroupHorizontal({super.key});

  @override
  State<RadioGroupHorizontal> createState() => _RadioGroupHorizontalState();
}

class _RadioGroupHorizontalState extends State<RadioGroupHorizontal> {
  String _selected = 'comfortable';

  static const _options = ['Default', 'Comfortable', 'Spacious'];

  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 24, // --space-300
      runSpacing: 12,
      children: _options.map((opt) {
        final value = opt.toLowerCase();
        final isChecked = _selected == value;

        return GestureDetector(
          onTap: () => setState(() => _selected = value),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              _RadioIndicator(isChecked: isChecked),
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
        );
      }).toList(),
    );
  }
}

class _RadioIndicator extends StatelessWidget {
  final bool isChecked;
  const _RadioIndicator({required this.isChecked});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 14,
      height: 14,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: isChecked ? const Color(0xFFF8785E) : const Color(0xFFFFFFFF), // --primary / --background
        border: isChecked ? null : Border.all(color: const Color(0xFFD4D0CE)), // --border-input
      ),
      child: isChecked
          ? Center(
              child: Container(
                width: 6,
                height: 6,
                decoration: const BoxDecoration(
                  shape: BoxShape.circle,
                  color: Color(0xFFFFFFFF), // --primary-foreground
                ),
              ),
            )
          : null,
    );
  }
}
