import 'package:flutter/material.dart';

class SwitchDefault extends StatefulWidget {
  const SwitchDefault({super.key});

  @override
  State<SwitchDefault> createState() => _SwitchDefaultState();
}

class _SwitchDefaultState extends State<SwitchDefault> {
  bool _checked = false;

  @override
  Widget build(BuildContext context) {
    return Switch(
      value: _checked,
      onChanged: (value) => setState(() => _checked = value),
      activeColor: const Color(0xFFFFFFFF), // --primary-foreground (thumb)
      activeTrackColor: const Color(0xFFF8785E), // --primary
      inactiveThumbColor: const Color(0xFFFFFFFF), // --primary-foreground
      inactiveTrackColor: const Color(0xFFC2BCBB), // --muted-active
    );
  }
}
