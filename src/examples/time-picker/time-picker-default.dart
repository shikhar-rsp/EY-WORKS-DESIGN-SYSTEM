import 'package:flutter/material.dart';

// Note: This is a simplified visual mockup of the TimePicker trigger.
// The full scrollable column picker behavior requires a dedicated Flutter widget implementation.

class TimePickerDefault extends StatelessWidget {
  const TimePickerDefault({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: _TimePickerTrigger(displayValue: '14:30'),
    );
  }
}

class _TimePickerTrigger extends StatelessWidget {
  final String displayValue;

  const _TimePickerTrigger({required this.displayValue});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 36,
      padding: const EdgeInsets.symmetric(horizontal: 12),
      decoration: BoxDecoration(
        color: const Color(0xFFFFFFFF), // --background
        borderRadius: BorderRadius.circular(8), // --radius-medium
        border: Border.all(color: const Color(0xFFEBE9E8)), // --border
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          // Clock icon
          Icon(
            Icons.access_time,
            size: 14,
            color: const Color(0xFF7A7272), // --muted-foreground
          ),
          const SizedBox(width: 8),
          Text(
            displayValue,
            style: const TextStyle(
              fontFamily: 'Lexend',
              fontSize: 14,
              color: Color(0xFF2E2B2B), // --foreground
            ),
          ),
          const SizedBox(width: 4),
          // Chevron icon
          Icon(
            Icons.keyboard_arrow_down,
            size: 14,
            color: const Color(0xFF7A7272), // --muted-foreground
          ),
        ],
      ),
    );
  }
}
