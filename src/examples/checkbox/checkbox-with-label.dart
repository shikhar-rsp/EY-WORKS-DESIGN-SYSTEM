import 'package:flutter/material.dart';

class CheckboxWithLabel extends StatefulWidget {
  const CheckboxWithLabel({super.key});

  @override
  State<CheckboxWithLabel> createState() => _CheckboxWithLabelState();
}

class _CheckboxWithLabelState extends State<CheckboxWithLabel> {
  bool _checked = false;

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Checkbox(
          value: _checked,
          onChanged: (v) => setState(() => _checked = v ?? false),
          activeColor: const Color(0xFFF8785E), // --primary
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(4)),
          side: const BorderSide(color: Color(0xFFADA5A5)),
        ),
        GestureDetector(
          onTap: () => setState(() => _checked = !_checked),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: const [
              Text(
                'Subscribe to newsletter',
                style: TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF2E2B2B)),
              ),
              SizedBox(height: 2),
              Text(
                'Get weekly updates and product news',
                style: TextStyle(fontFamily: 'Lexend', fontSize: 12, color: Color(0xFF7A7272)),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
