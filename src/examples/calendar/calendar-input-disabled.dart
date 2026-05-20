import 'package:flutter/material.dart';

class CalendarInputDisabled extends StatelessWidget {
  const CalendarInputDisabled({super.key});

  @override
  Widget build(BuildContext context) {
    return Opacity(
      opacity: 0.5,
      child: OutlinedButton.icon(
        onPressed: null,
        icon: const Icon(Icons.calendar_today_outlined, size: 14),
        label: const Text('Select date'),
        style: OutlinedButton.styleFrom(
          foregroundColor: const Color(0xFF7A7272), // --placeholder
          disabledForegroundColor: const Color(0xFF7A7272),
          side: const BorderSide(color: Color(0xFFEBE9E8)), // --border
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
          padding: const EdgeInsets.symmetric(horizontal: 12),
          minimumSize: const Size(250, 38),
          alignment: Alignment.centerLeft,
          textStyle: const TextStyle(fontSize: 16),
        ),
      ),
    );
  }
}
