import 'package:flutter/material.dart';

class CheckboxBrand extends StatefulWidget {
  const CheckboxBrand({super.key});

  @override
  State<CheckboxBrand> createState() => _CheckboxBrandState();
}

class _CheckboxBrandState extends State<CheckboxBrand> {
  bool _checked = true;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFFFCC9BF), // --primary-muted
        borderRadius: BorderRadius.circular(4),
      ),
      padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Checkbox(
            value: _checked,
            onChanged: (v) => setState(() => _checked = v ?? false),
            activeColor: const Color(0xFFF8785E), // --primary
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(4)),
            side: const BorderSide(color: Color(0xFFADA5A5)),
          ),
          const Text(
            'Brand checkbox',
            style: TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF2E2B2B)),
          ),
        ],
      ),
    );
  }
}
