import 'package:flutter/material.dart';

class CollapsibleDisabled extends StatelessWidget {
  const CollapsibleDisabled({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 256,
      child: Opacity(
        opacity: 0.5,
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: const [
              Text(
                'Repositories',
                style: TextStyle(fontSize: 14, color: Color(0xFF2E2B2B)),
              ),
              Icon(Icons.keyboard_arrow_down, size: 16),
            ],
          ),
        ),
      ),
    );
  }
}
