import 'package:flutter/material.dart';

class SliderRange extends StatefulWidget {
  const SliderRange({super.key});

  @override
  State<SliderRange> createState() => _SliderRangeState();
}

class _SliderRangeState extends State<SliderRange> {
  RangeValues _values = const RangeValues(20, 70);

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
        child: RangeSlider(
          values: _values,
          min: 0,
          max: 100,
          onChanged: (v) => setState(() => _values = v),
        ),
      ),
    );
  }
}
