import 'package:flutter/material.dart';

class SliderDefault extends StatefulWidget {
  const SliderDefault({super.key});

  @override
  State<SliderDefault> createState() => _SliderDefaultState();
}

class _SliderDefaultState extends State<SliderDefault> {
  double _value = 33;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 256,
      child: SliderTheme(
        data: SliderTheme.of(context).copyWith(
          activeTrackColor: const Color(0xFFF8785E), // --primary
          inactiveTrackColor: const Color(0xFFC2BCBB), // --muted-active
          thumbColor: const Color(0xFFFFFFFF), // --primary-foreground
          overlayColor: const Color(0x1AF8785E),
        ),
        child: Slider(
          value: _value,
          min: 0,
          max: 100,
          onChanged: (v) => setState(() => _value = v),
        ),
      ),
    );
  }
}
