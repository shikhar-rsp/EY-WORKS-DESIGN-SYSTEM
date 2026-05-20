import 'package:flutter/material.dart';

class CollapsibleControlled extends StatefulWidget {
  const CollapsibleControlled({super.key});

  @override
  State<CollapsibleControlled> createState() => _CollapsibleControlledState();
}

class _CollapsibleControlledState extends State<CollapsibleControlled> {
  bool _open = false;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        OutlinedButton(
          onPressed: () => setState(() => _open = !_open),
          style: OutlinedButton.styleFrom(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
            side: const BorderSide(color: Color(0xFFEBE9E8)),
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(4)),
            foregroundColor: const Color(0xFF2E2B2B),
            textStyle: const TextStyle(fontSize: 12),
          ),
          child: const Text('Toggle externally'),
        ),
        const SizedBox(height: 12),
        SizedBox(
          width: 256,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              InkWell(
                onTap: () => setState(() => _open = !_open),
                borderRadius: BorderRadius.circular(8),
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      const Text('Repositories', style: TextStyle(fontSize: 14, color: Color(0xFF2E2B2B))),
                      AnimatedRotation(
                        turns: _open ? 0.5 : 0.0,
                        duration: const Duration(milliseconds: 200),
                        child: const Icon(Icons.keyboard_arrow_down, size: 16),
                      ),
                    ],
                  ),
                ),
              ),
              AnimatedCrossFade(
                duration: const Duration(milliseconds: 200),
                crossFadeState: _open ? CrossFadeState.showSecond : CrossFadeState.showFirst,
                firstChild: const SizedBox.shrink(),
                secondChild: Padding(
                  padding: const EdgeInsets.only(left: 16, top: 8),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: ['@design-system/ui', '@design-system/icons'].map((repo) =>
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                        child: Text(repo, style: const TextStyle(fontSize: 14, color: Color(0xFF71717A))),
                      ),
                    ).toList(),
                  ),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
